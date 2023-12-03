export interface StorageType {
  id: number,
  name: string
}

export interface StorageInfoType {
  communal: number,
  employee_salaries: number,
  id: number,
  name: string,
  prosto_pay: number,
  rent: number,
  sim_card: number
}

export interface CalculationsBlockType {
  ingridients: number,
  storageExpenses: StorageInfoType
}

export interface MonthesType {
  month: string,
  setMonth: React.Dispatch<React.SetStateAction<string>>
}