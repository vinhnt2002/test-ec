import { Star, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Angela Sellers",
    date: "Fri Jan 03 2025",
    comment: "Can't wait to gift them. Super fast delivery. Thank you.",
    rating: 5,
  },
  {
    name: "Katherine",
    date: "Thu Jan 02 2025",
    comment:
      "Super warm and cozy!! Shipped very quickly and love the design, especially...",
    rating: 5,
  },
  {
    name: "Jamie Daniel",
    date: "Wed Jan 01 2025",
    comment: "Fast turnaround for a custom item with cute packaging",
    rating: 4,
  },
];

export default function ProductReviews() {
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">
        Reviews
      </h1>

      <div className="bg-white rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Phần tổng kết điểm số */}
        <div className="space-y-5 text-center md:text-left">
          <div className="text-5xl font-bold text-orange-500">4.9/5</div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars, index) => (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-sm font-medium">{stars}★</span>
                <div className="w-36 md:w-48 h-3 bg-gray-200 rounded-full relative overflow-hidden">
                  <div
                    className="h-3 bg-yellow-400 rounded-full"
                    style={{
                      width: `${
                        stars === 5
                          ? "91%"
                          : stars === 4
                          ? "7%"
                          : stars === 3
                          ? "2%"
                          : "0%"
                      }`,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-500">
                  {stars === 5
                    ? "91%"
                    : stars === 4
                    ? "7%"
                    : stars === 3
                    ? "2%"
                    : "0%"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Danh sách đánh giá */}
        <div className="space-y-6 md:col-span-2">
          {reviews.map((review, index) => (
            <div key={index} className="border-b pb-4 space-y-2">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <span className="font-bold text-gray-800">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs text-green-500">Verified purchase</span>
              </div>
              <div className="flex gap-1 text-yellow-500">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}

          {/* Nút viết đánh giá */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition shadow-md">
            + Write your review
          </button>
        </div>
      </div>
    </div>
  );
}
