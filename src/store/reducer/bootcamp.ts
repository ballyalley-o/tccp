// import { createSlice } from '@reduxjs/toolkit';

// export const bootcampSlice = createSlice({
//   name: 'bootcamp',
//   initialState: {
//     bootcamps: [],
//     bootcamp: null,
//     loading: false,
//     error: null,
//     success: false,
//     count: 0,
//     pagination: {},
//     query: ''
//   },
//   reducers: {
//     getBootcamps: (state, action) => {
//       state.bootcamps = action.payload;
//       state.loading = false;
//     },
//     getBootcamp: (state, action) => {
//       state.bootcamp = action.payload;
//       state.loading = false;
//     },
//     createBootcamp: (state, action) => {
//       state.bootcamps.push(action.payload);
//       state.loading = false;
//     },
//     updateBootcamp: (state, action) => {
//       state.bootcamps = state.bootcamps.map(bootcamp =>
//         bootcamp._id === action.payload._id ? action.payload : bootcamp
//       );
//       state.loading = false;
//     },
//     deleteBootcamp: (state, action) => {
//       state.bootcamps = state.bootcamps.filter(
//         bootcamp => bootcamp._id !== action.payload
//       );
//       state.loading = false;
//     },
//     bootcampError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//     clearBootcamp: state => {
//       state.bootcamp = null;
//       state.loading = false;
//     },
//     clearBootcamps: state => {
//       state.bootcamps = [];
//       state.loading = false;
//     },
//     clearErrors: state => {
//       state.error = null;
//     },
//     clearSuccess: state => {
//       state.success = false;
//     },
//     clearQuery: state => {
//       state.query = '';
//     },
//     bootcampCount: (state, action) => {
//       state.count = action.payload;
//     },
//     bootcampPagination: (state, action) => {
//       state.pagination = action.payload;
//     },
//     bootcampQuery: (state, action) => {
//       state.query = action.payload;
//     },
//     bootcampLoading: state => {
//       state.loading = true;
//     },
//     bootcampSuccess: state => {
//       state.success = true;
//   }
// });

// export default bootcampSlice.reducer;
