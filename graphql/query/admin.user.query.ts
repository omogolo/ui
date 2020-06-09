import { gql } from 'apollo-boost'
import { ADMIN_USER_FRAGMENT, AdminUserFragment } from '../fragment/admin.user.fragment'

export interface AdminUserQueryData {
  user: AdminUserFragment
}

export interface AdminUserQueryVariables {
  id: string
}

export const ADMIN_USER_QUERY = gql`
  query user($id: ID!) {
    user: getUserById(id: $id) {
      ...AdminUser
    }
  }

  ${ADMIN_USER_FRAGMENT}
`
