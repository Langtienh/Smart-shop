// Hàm để tạo URL API từ đối tượng bộ lọc

function createApiUrl(filters) {
  const baseUrl = "products"; // URL cơ sở của JSON Server

  // Kiểm tra nếu filters là một đối tượng hợp lệ
  if (
    filters &&
    typeof filters === "object" &&
    Object.keys(filters).length > 0
  ) {
    let filtersArray = [];

    // Lặp qua từng thuộc tính trong đối tượng filters
    for (let key in filters) {
      if (filters.hasOwnProperty(key)) {
        let value = filters[key];

        // Chuyển các giá trị số về số thập phân nếu là số
        if (typeof value === "number") {
          value = parseFloat(value);
        }

        // Thêm mảng con [thuộc tính, giá trị] vào filtersArray
        filtersArray.push([key, value]);
      }
    }

    // Chuyển đổi mảng filtersArray thành chuỗi JSON
    const filtersJson = JSON.stringify(filtersArray);

    // Mã hóa chuỗi JSON để trở thành tham số truy vấn hợp lệ
    const encodedFilters = encodeURIComponent(filtersJson);

    // Tạo URL hoàn chỉnh
    return `${baseUrl}?filters=${encodedFilters}`;
  }

  // Trường hợp mặc định, chỉ trả về URL cơ sở
  return baseUrl;
}

export default createApiUrl;

// // Ví dụ sử dụng
// const filters = {
//   category: "smartphone",
//   ram: 8,
// };

// const apiUrl = createApiUrl(filters);
// console.log(apiUrl);
