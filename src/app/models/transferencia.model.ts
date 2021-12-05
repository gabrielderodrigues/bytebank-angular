export interface Transferencia {
  id?: number | string;
  valor: number | undefined;
  destino: string | number | undefined;
  data?: string;
}