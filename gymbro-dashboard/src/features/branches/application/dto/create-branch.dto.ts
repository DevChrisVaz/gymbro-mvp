export interface CreateBranchDto {
    name: string;
    address: {
        street: string;
        building: string;
        zip: string;
        neighborhood: string;
        city: string;
        state: string;
        country: string;
    };
    phone: string;
    email: string;
}