const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg border p-4 w-full max-w-xs mx-auto mt-8 text-center">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-14 h-14 rounded-full mx-auto mb-3 object-cover"
      />
      <h2 className="text-lg font-medium text-gray-800">
        {user.name || "No name available"}
      </h2>
      <p className="text-sm text-gray-500 mb-4">@{user.login}</p>

      <div className="flex justify-between px-4 text-sm text-gray-600">
        <div>
          <p className="text-xs text-gray-400">Repos</p>
          <p className="font-semibold">{user.public_repos}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Followers</p>
          <p className="font-semibold">{user.followers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
