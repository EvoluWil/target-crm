import React, { useContext, useEffect, useState } from "react";
import UserService from "data/services/UserService";
import { IUser } from "types/User";
import AuthContext from "contexts/AuthContext";
import { useRouter } from "next/dist/client/router";
import { useNavBarComponent } from "../componentHooks/navBarHook";

// import CompanyService from "data/services/CompanyService";

export const useUserPage = () => {
  //DECLARAÇÃO DAS VARIAVEIS
  const { isAdmin } = useNavBarComponent();
  const route = useRouter();
  const [users, setUsers] = useState([]);
  const [timer, setTimer] = useState(null);
  const [removeFilteredUsers, setFilteredUsers] = useState([]);
  const [formatUsersToSelect, setFormat] = useState([]);
  const [createUserModalState, setCreateUserModalState] =
    useState<boolean>(false);

  const [userDetail, setUserDetail] = useState<IUser>({});

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        if (!isAdmin) {
          route.push("/account");
        }
      }, 1000)
    );
  }, [isAdmin]);

  useEffect(() => {
    if (!users.length) {
      getData();
    }
  }, []);

  const formatListToSelect = (users: any[]): any => {
    setFormat(
      users.map((user) => {
        return { value: user.id, label: user.name };
      })
    );
  };

  const getData = async () => {
    const response = await UserService.getUsers();
    setUsers(response);
    setFilteredUsers(response);
    formatListToSelect(response);
  };

  const filteredUser = async (terms: string, typeValue: string) => {
    let filtered = [];
    if (typeValue === "name") {
      filtered = users.filter((user) =>
        user.name.toLowerCase().includes(terms.toLocaleLowerCase())
      );
    } else {
      filtered = users.filter((user) =>
        user?.role.toLowerCase().includes(terms.toLocaleLowerCase())
      );
    }
    setUsers(filtered);
  };

  const removeFiltered = async (isNewSearched: boolean) => {
    if (!isNewSearched) setUsers(removeFilteredUsers);
  };

  const createUser = async (data: IUser) => {
    await UserService.createUser(data);
    useCreateUserModal();
  };

  const useCreateUserModal = () => {
    setCreateUserModalState(!createUserModalState);
  };

  const useUserDetailModal = (userDetail: any) => {
    setUserDetail(userDetail);
  };

  const editUser = async (userId: any, data: any) => {
    const res = await UserService.editUser(userId, data);
    return res;
  };

  const deleteUser = async (userId: any) => {
    const response = await UserService.deleteUser(userId);
  };

  return {
    users,
    formatUsersToSelect,
    filteredUser,
    removeFiltered,
    // CREATE MODAL
    createUser,
    useCreateUserModal,
    createUserModalState,
    setCreateUserModalState,
    setUserDetail,
    useUserDetailModal,
    editUser,
    userDetail,
    deleteUser,
    getData,
  };
};
