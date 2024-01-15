export const pagination = (
  data: any[],
  currentPage: number,
  pageSize: number,
): any[] => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  if (startIndex >= data.length) {
    return [];
  }
  return data.slice(startIndex, endIndex);
};
