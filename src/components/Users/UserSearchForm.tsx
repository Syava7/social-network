import {Field, Form, Formik} from 'formik';
import React from 'react';

type UserSearchFormType = {
  term: string
}
const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
}
export const UserSearchForm = () => {

  const submit = (values: UserSearchFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

  }

  return <div>
    <Formik
      initialValues={{term: ''}}
      validate={usersSearchFormValidate}
      onSubmit={submit}
    >
      {({isSubmitting}) => (
        <Form>
          <Field type="text" name="term"/>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </div>
}