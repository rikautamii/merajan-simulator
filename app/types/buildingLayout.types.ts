export type JumlahSanggah = "satu" | "dua" | "tiga" | "empat" | "lima";
export type BuildingLayoutFieldsType = {
    sanggah: JumlahSanggah;
    alengkat: number;
    atebah: number;
    panjang: number;
    lebar: number;
};
export type BuildingLayoutDataType = {
    bytesImg: string;
}
