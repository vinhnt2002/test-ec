import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import {
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  auth,
  googleProvider,
  facebookProvider,
} from "@/lib/firebase/firebaseConfig";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.com",
  headers: {
    "Content-Type": "application/json",
  },
});

interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
}

interface AuthState {
  currentUser: User | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;

  // Authentication methods
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signUp: (email: string, password: string) => Promise<AuthResult>;
  signInWithGoogle: () => Promise<AuthResult>;
  signInWithFacebook: () => Promise<AuthResult>;

  // Account management
  logOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  refreshToken: () => Promise<string | null>;

  // State management
  setAccessToken: (token: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  initialize: () => (() => void) | undefined;
}

//  auth store với persist middleware
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      currentUser: null,
      accessToken: null,
      loading: true,
      error: null,

      // Khởi tạo auth listener
      initialize: () => {
        if (typeof window !== "undefined") {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            set({ currentUser: user, loading: false });

            // Lưu token vào state và localStorage
            if (user) {
              user.getIdToken().then((token) => {
                set({ accessToken: token });
                localStorage.setItem("auth-token", token);
              });
            } else {
              set({ accessToken: null });
              localStorage.removeItem("auth-token");
            }
          });

          return unsubscribe;
        }
        return undefined;
      },

      // Hàm xử lý đăng nhập với email và password
      signIn: async (email: string, password: string): Promise<AuthResult> => {
        try {
          set({ loading: true, error: null });
          const result = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const token = await result.user.getIdToken();
          set({ loading: false, accessToken: token });
          return { success: true, user: result.user };
        } catch (error: any) {
          const errorMessage = error.message || "Lỗi đăng nhập";
          set({ loading: false, error: errorMessage });
          return { success: false, error: errorMessage };
        }
      },

      // Hàm xử lý đăng ký với email và password
      signUp: async (email: string, password: string): Promise<AuthResult> => {
        try {
          set({ loading: true, error: null });
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const token = await result.user.getIdToken();
          set({ loading: false, accessToken: token });
          return { success: true, user: result.user };
        } catch (error: any) {
          const errorMessage = error.message || "Lỗi đăng ký";
          set({ loading: false, error: errorMessage });
          return { success: false, error: errorMessage };
        }
      },

      // Hàm xử lý đăng nhập với Google
      signInWithGoogle: async (): Promise<AuthResult> => {
        try {
          set({ loading: true, error: null });
          const result = await signInWithPopup(auth, googleProvider);
          const token = await result.user.getIdToken();
          set({ loading: false, accessToken: token });
          return { success: true, user: result.user };
        } catch (error: any) {
          const errorMessage = error.message || "Lỗi đăng nhập với Google";
          set({ loading: false, error: errorMessage });
          return { success: false, error: errorMessage };
        }
      },

      // Hàm xử lý đăng nhập với Facebook
      signInWithFacebook: async (): Promise<AuthResult> => {
        try {
          set({ loading: true, error: null });
          const result = await signInWithPopup(auth, facebookProvider);
          const token = await result.user.getIdToken();
          set({ loading: false, accessToken: token });
          return { success: true, user: result.user };
        } catch (error: any) {
          const errorMessage = error.message || "Lỗi đăng nhập với Facebook";
          set({ loading: false, error: errorMessage });
          return { success: false, error: errorMessage };
        }
      },

      // Hàm xử lý đặt lại mật khẩu
      resetPassword: async (email: string): Promise<void> => {
        try {
          set({ loading: true, error: null });
          await sendPasswordResetEmail(auth, email);
          set({ loading: false });
        } catch (error: any) {
          const errorMessage = error.message || "Lỗi đặt lại mật khẩu";
          set({ loading: false, error: errorMessage });
          throw error;
        }
      },

      // Hàm làm mới token
      refreshToken: async (): Promise<string | null> => {
        try {
          const user = get().currentUser;
          if (!user) return null;

          const token = await user.getIdToken(true);
          set({ accessToken: token });
          localStorage.setItem("auth-token", token);
          return token;
        } catch (error: any) {
          const errorMessage = error.message || "Lỗi làm mới token";
          set({ error: errorMessage });
          return null;
        }
      },

      // Hàm xử lý đăng xuất
      logOut: async (): Promise<void> => {
        try {
          set({ loading: true, error: null });
          await signOut(auth);
          set({ currentUser: null, accessToken: null, loading: false });
          localStorage.removeItem("auth-token");
        } catch (error: any) {
          const errorMessage = error.message || "Lỗi đăng xuất";
          set({ loading: false, error: errorMessage });
          throw error;
        }
      },

      // Các hàm setter
      setAccessToken: (token: string | null) => set({ accessToken: token }),
      setLoading: (loading: boolean) => set({ loading }),
      setError: (error: string | null) => set({ error }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        // Chỉ lưu một số thông tin cần thiết của user
        currentUser: state.currentUser
          ? {
              uid: state.currentUser.uid,
              email: state.currentUser.email,
              displayName: state.currentUser.displayName,
              photoURL: state.currentUser.photoURL,
            }
          : null,
        accessToken: state.accessToken,
      }),
    }
  )
);

// Interceptor để tự động thêm token vào headers của mọi request
api.interceptors.request.use(
  async (config) => {
    const token = useAuthStore.getState().accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor để xử lý lỗi 401 (Unauthorized)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Xử lý lỗi 401 và thử refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const token = await useAuthStore.getState().refreshToken();
        if (token) {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Đăng xuất nếu không thể refresh token
        await useAuthStore.getState().logOut();
      }
    }

    return Promise.reject(error);
  }
);

// Khởi tạo auth listener khi store được tạo (client-side only)
if (typeof window !== "undefined") {
  const unsubscribe = useAuthStore.getState().initialize();

  // Khởi động lại khi cửa sổ tải lại
  window.addEventListener("load", () => {
    if (typeof unsubscribe === "function") {
      unsubscribe();
    }
    useAuthStore.getState().initialize();
  });
}
