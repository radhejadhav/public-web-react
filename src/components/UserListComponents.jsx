import React from 'react'
import { Container, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap'

export default function UserListComponents({ users, onPagination, totalPage, currentPage }) {

    let element = []
    for (let index = 0; index < totalPage; index++) {
        element.push(
            <PaginationItem key={index} active={index == currentPage}>
                <PaginationLink
                    onClick={e => onPagination(index)}>
                    {index}
                </PaginationLink>
            </PaginationItem>
        )
    }
    return (

        <Container fluid>
            <Table bordered>
                <thead>
                    <tr>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email ID
                        </th>
                        <th>
                            Mobile
                        </th>
                        <th>
                            Company
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data, index) => (
                            <tr key={index}>
                                <th>{data.firstName}</th>
                                <td>{data.lastName}</td>
                                <td>{data.email}</td>
                                <td>{data.mobile}</td>
                                <td>{data.company}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Container className='w-25'>
                <Pagination>
                    <PaginationItem >
                        <PaginationLink
                            first
                            onClick={e => onPagination(0)}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            onClick={e => onPagination(currentPage - 1)}
                            previous
                        />
                    </PaginationItem>
                    {element}
                    <PaginationItem>
                        <PaginationLink
                            onClick={e => onPagination(currentPage + 1)}
                            next
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            onClick={e => onPagination(totalPage - 1)}
                            last
                        />
                    </PaginationItem>
                </Pagination>
            </Container>
        </Container>
    )
}
