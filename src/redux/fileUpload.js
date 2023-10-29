import { createSlice } from "@reduxjs/toolkit";
import { topDealUsers, genderData, demoUser } from "../data";



const initialState = { file: topDealUsers, genderRatio: genderData, tableData: demoUser };

const counterSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    toGenderRatio(state, action) {       
    //   console.log('added by 1 : ')
        return {...state, genderRatio: action.payload}   // when action performed then data will be sent from component
    },

    toFileUploaded(state, action) {     // this will be the data user have uploaded
        return {
            ...state, file: action.payload,
        }
    //   console.log(' action payload : ',action.payload )
    },

    toNewTableData(state, action) {
        return { ...state, tableData: action.payload}
    }
  }
});

export const { toGenderRatio, toFileUploaded, toNewTableData } = counterSlice.actions;

export default counterSlice.reducer;
