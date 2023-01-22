import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1b45f043-c0cb-4548-939f-fb1cfa7b8b54",
  },
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((respone) => {
        return respone.data;
      });
  },
};

// export const followedAPI = {
//   unfollow(userID) {
//     return instance.delete(`follow/${userID}`).then((response) => {
//       if (response.data.resultCode == 0) {
//         props.unfollow(user.id);
//       }
//     });
//   },
// };

// export const followedAPI = {
//   follow(userId) {
//      return instance.post(`follow/${userId}`, {}, {}).then(response => response.data)
//   },
//   unfollow(userId) {
//      return instance.delete(`follow/${userId}`, {}).then(response => response.data)
//   }
// }
