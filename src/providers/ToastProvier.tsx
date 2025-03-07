'use client'
import React, { createContext, useContext, ReactNode } from "react";
import toast, { Toaster, ToasterProps } from "react-hot-toast";

interface ToastServiceType {
  success: (message: string) => void;
  error: (message: string) => void;
  loading: (message: string) => string;
  dismiss: (id?: string) => void;
  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string | ((err: any) => string);
    }
  ) => Promise<T>;
}

const ToastContext = createContext<ToastServiceType | undefined>(undefined);

export const useToast = (): ToastServiceType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
  toasterProps?: Partial<ToasterProps>;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  toasterProps = {},
}) => {
  const defaultToasterProps: Partial<ToasterProps> = {
    position: "top-center",
    toastOptions: {
      duration: 5000,
      style: {
        background: "#fff",
        color: "#333",
      },
      success: {
        iconTheme: {
          primary: "#4CAF50",
          secondary: "#FFFFFF",
        },
      },
      error: {
        iconTheme: {
          primary: "#E53E3E",
          secondary: "#FFFFFF",
        },
      },
    },
  };

  const mergedProps = { ...defaultToasterProps, ...toasterProps };

  const toastService: ToastServiceType = {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    loading: (message) => toast.loading(message),
    dismiss: (id) => (id ? toast.dismiss(id) : toast.dismiss()),
    promise: <T,>(
      promise: Promise<T>,
      messages: {
        loading: string;
        success: string;
        error: string | ((err: any) => string);
      }
    ) => toast.promise(promise, messages),
  };

  return (
    <ToastContext.Provider value={toastService}>
      {children}
      <Toaster {...mergedProps} />
    </ToastContext.Provider>
  );
};