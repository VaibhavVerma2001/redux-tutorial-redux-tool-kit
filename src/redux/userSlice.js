import { createSlice } from "@reduxjs/toolkit";

// 1 -- simply without async actions

// export const userSlice = createSlice({
//     // name of state
//     name: 'user',
//     // initial value of state
//     initialState : {
//         name: "vaibhav",
//         email : "abc@example.com"
//     },
//     reducers: {
//         // Actions
//         // in update component we update user
//         update :(state,action)=>{
//             state.name = action.payload.name;
//             state.email = action.payload.email;
//         },
//         // no  need to take action payload because there is only one user
//         remove : (state)=>
//             // make empty because no user
//             state = {},
//         addHello : (state,action)=>{
//             state.name = "Hello " + action.payload.name;
//         }
//     }
// });

// // export actions
// export const {update,remove,addHello} = userSlice.actions;


// 2 -- with redux async actions like login and update or register etc

export const userSlice = createSlice({
    // name of state
    name: 'user',
    // initial value of state
    initialState: {
        userInfo: {
            name: "vaibhav",
            email: "abc@example.com"
        },
        loading: null,
        error: false
    },
    reducers: {
        updateStart: (state) => {
            state.loading = true;
        },
        // action bec we need updated user
        updateSuccess: (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
        },
        updateError: (state) => {
            state.error = true;
            state.loading = false;
        },
        logOut : (state)=>{
            state.userInfo = {};
            state.loading = false;
            state.error = false;
        }
    }
});

// export actions
export const { updateStart, updateSuccess, updateError, logOut } = userSlice.actions;


export default userSlice.reducer;