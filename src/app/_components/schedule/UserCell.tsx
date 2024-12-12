import { getUserById } from "@/utils/getUserById";
import Image from "next/image";

type CellProps = {
  userId: string;
};
const UserCell = ({ userId }: CellProps) => {
  const user = getUserById(userId);
  return (
    <th
      scope="row"
      className="bg-gray-100 pl-3 pr-1 py-2 border relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[4px] before:bg-yellow-500"
    >
      <div className="flex gap-3 items-center">
        <Image src="/profile.png" alt="profile" width={36} height={36} />
        <div>
          <p className="font-medium text-sm">{user?.name}</p>
          <p className="text-xs text-left text-gray-500 font-normal mb-1">
            {user?.role}
          </p>
          {user?.hours == 0 ? (
            <p className="text-xs text-left text-gray-500 font-normal ml-1">
              {user.hours}
            </p>
          ) : (
            <p className="text-xs text-left text-status-yellow font-medium ml-1">
              {user?.hours}h
            </p>
          )}
        </div>
      </div>
    </th>
  );
};

export default UserCell;
