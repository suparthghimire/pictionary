const users = [];
module.exports = {
  add_user: (user) => users.push(user),
  remove_user: (user_id) => {
    const user_index = users.findIndex((user) => user.user_id === user_id);
    if (user_index !== -1) return users.splice(user_index, 1)[0];
  },
  get_all_users: () => users,
};
