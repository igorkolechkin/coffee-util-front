export interface StorageQuantityDataType {
  product_id: number,
  price: string,
  count: number,
  date: string
}

export interface StorageQuantityDataAddType extends StorageQuantityDataType {
  storage_id: number
}