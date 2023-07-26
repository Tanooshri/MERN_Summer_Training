export const AppConstants = {
    SCHEMA:{
        NOTE_SCHEMA : 'notes',
        USER_SCHEMA : 'users',
        ROLE_SCHEMA : 'roles'
    },


    STATUS_CODE:{
     SUCCESS: 200,
     SERVER_ERROR: 500,
     UNAUTHORIZED: 401,
     RESOURSE_NOT_FOUND:404
    },

   ROUTES:{
    NOTES:{
        ADD:"/add-note",
        GET_ALL_NOTES:'/all-notes',
        DELETE:"/delete-note"
    },
    USERS:{
        REGISTER:"/register-user",
    }
   }

}
export const SCHEMA = AppConstants.SCHEMA;
export const STATUS_CODE = AppConstants.STATUS_CODE;
export const NOTE_ROUTES = AppConstants.ROUTES.NOTES;