
// /**
//  * Represents the cardinal directions in the Balinese language.
//  * 
//  * @typedef {("utara" | "selatan" | "barat" | "timur")} LandDirectionType
//  */
// export type LandDirectionType = "utara" | "selatan" | "barat" | "timur";
// /**
//  * Represents the data structure for the location of a yard door.
//  * 
//  * @typedef {Object} LocationDoorDataType
//  * @property {string} bytesImg - The image data in bytes.
//  * @property {Object.<string, Object>} philosophy - An object containing philosophical information.
//  * @property {string} philosophy.bhsBali - The Balinese language representation.
//  * @property {string} philosophy.bhsIndonesia - The Indonesian language representation.
//  * @property {string} philosophy.locationValue - The value representing the location.
//  */
// export type LocationDoorDataType = {
//   bytesImg: string;
//   philosophy: {
//     [key: string]: {
//       bhsBali: string;
//       bhsIndonesia: string;
//       locationValue: string;
//     };
//   };
// };
// /**
//  * Represents the fields required for the location of a yard door.
//  */
// export type LocationDoorFieldsType = {
//     yardLength: number;
//     landDirection: LandDirectionType;
// }