const friendsInfoQuery = selector({
    key: 'FriendsInfoQuery',
    get: ({get}) => {
      const {friendList} = get(currentUserInfoQuery);
      const friends = get(waitForAll(
        friendList.map(friendID => userInfoQuery(friendID))
      ));
      return friends;
    },
  });