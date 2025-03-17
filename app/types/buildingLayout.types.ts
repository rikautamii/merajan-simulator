export type LandDirectionType = "north" | "south" | "east" | "west";
export type BaliOrientationType = "baliutara" | "baliselatan";
export type BuildingLayoutFieldsType = {
    landDirection: LandDirectionType;
    footLength: number;
    sideFootLength: number;
    landLength: number;
    landWidth: number;
    BaliOrientation: BaliOrientationType;
};
export type BuildingLayoutDataType = {
    bytesImg: string;
}
export type BuildingLayoutHistoryType = {
    landDirection: LandDirectionType;
    baliOrientation: BaliOrientationType;
    landLength: number;
    landWidth: number;
    footLength: number;
    sideFootLength: number;
    landArea: string;
    result11: number;
    result12: number;
    result13: number;
    result14: number;
    result15: number;
    result16: number;
    result17: number;
    result18: number;
    result19: number;
    result10: number;
    result21: number;
    result22: number;
    result23: number;
    result24: number;
    result25: number;
    result26: number;
    result27: number;
    result28: number;
    result29: number;
    result20: number;
    result31: number;
    result32: number;
    result33: number;
    result34: number;
    result35: number;
    result36: number;
    result37: number;
    result38: number;
    result39: number;
    result30: number;
}