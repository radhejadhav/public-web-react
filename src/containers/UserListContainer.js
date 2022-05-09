import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { pageRequest, setPage } from '../actions/UserAction';
import UserListComponents from '../components/UserListComponents';

export default function UserListContainer() {

  const dispatch = useDispatch();

  const { userList, page, size, totalPage } = useSelector(state => state.users)

  let { data } = JSON.parse(sessionStorage.userSession)


  const onPagination = (data) => {
      if(!(data>=totalPage) && !(data<0)){
        dispatch(setPage(data))
      }
      if(data<0){
        toast.error("You are on first page !",{autoClose:1000})
      }
      if(data>=totalPage){
        toast.error("You are on last page !",{autoClose:1000})
      }
  }

  useEffect(() => {
    let requestHeaders = {
      params: {
        page: page,
        size: size
      },
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    }
    dispatch(pageRequest(requestHeaders))
  }, [page, size])

  return (
    <UserListComponents
      currentPage = {page}
      users={userList}
      onPagination = {onPagination}
      totalPage = {totalPage}
    />
  )
}
