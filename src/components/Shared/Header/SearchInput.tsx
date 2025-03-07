"use client";

import { SearchIcon } from "lucide-react";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownInput, setIsDropdownInput] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownInput(false);
      }
    };

    if (isDropdownInput) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownInput]);

  const saveSearchHistory = (query: string) => {
    if (!query.trim()) return;

    const currentHistory = [...searchHistory];

    const queryIndex = currentHistory.indexOf(query);
    if (queryIndex !== -1) {
      currentHistory.splice(queryIndex, 1);
    }

    currentHistory.unshift(query);

    if (currentHistory.length > 10) {
      currentHistory.pop();
    }

    setSearchHistory(currentHistory);
    localStorage.setItem("searchHistory", JSON.stringify(currentHistory));
  };

  const removeSearchItem = (itemToRemove: string) => {
    const updatedHistory = searchHistory.filter(
      (item) => item !== itemToRemove
    );
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const removeAllSearchItem = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      saveSearchHistory(searchQuery);
      setIsDropdownInput(false);
    }
  };

  return (
    <div className="w-full relative">
      <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <SearchIcon className="!text-[#19124f] hover:!text-[#a397e1] duration-300" />
      </button>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsDropdownInput(true);
          }}
          onKeyDown={handleSearch}
          onFocus={() => setIsDropdownInput(true)}
          onClick={() => setIsDropdownInput(true)}
          className="w-full p-3 pl-10 text-sm border-2 border-[#ff7300] outline-none rounded-full"
          placeholder="Search..."
        />
      </div>
      {isDropdownInput && (
        <div
          ref={dropdownRef}
          className={`absolute top-full left-0 w-full bg-white rounded-md shadow-lg z-10 transition-opacity duration-300 ${
            isDropdownInput ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-4">
            {searchHistory.length > 0 ? (
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Lịch sử tìm kiếm
                  </h3>
                  <p
                    className="text-xs hover:text-[#ff7300] cursor-pointer"
                    onClick={removeAllSearchItem}
                  >
                    Xoá tất cả lịch sử
                  </p>
                </div>
                <ul className="space-y-2">
                  {searchHistory.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600 "
                    >
                      <span
                        onClick={() => {
                          setSearchQuery(item);
                          saveSearchHistory(item);
                          setIsDropdownInput(false);
                        }}
                        className="w-full hover:text-[#ff7300] cursor-pointer"
                      >
                        {item}
                      </span>
                      <span
                        className="hover:text-[#ff7300] cursor-pointer"
                        onClick={() => removeSearchItem(item)}
                      >
                        <FaTimes />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Chưa có lịch sử tìm kiếm</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
