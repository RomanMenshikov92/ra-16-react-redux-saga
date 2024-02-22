export interface Service {
  id: number;
  name: string;
  price: number;
  content: string;
}

export interface RootState {
  services: Service[];
  selectedService: Service | null;
  loading: boolean;
  error: string | null;
}