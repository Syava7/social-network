import {Field, Form, Formik} from 'formik';
import React from 'react';
import {FilterType} from '../../Redux/usersReducer';
import {Button} from '@mui/material';


type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

type FormType = {
  term: string,
  friend: string
}

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
}
export const UserSearchForm: React.FC<PropsType> = React.memo((props) => {

  const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
    }

    props.onFilterChanged(filter)
    setSubmitting(false)
  }

  return <div>
    <Formik
      initialValues={{term: '', friend: 'null'}}
      validate={usersSearchFormValidate}
      onSubmit={submit}
    >
      {({isSubmitting}) => (
        <Form>
          <Field type="text" name="term"/>
          <Field name="friend" as="select">
            <option value="null">All</option>
            <option value="true"> Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field>
          <Button type="submit"
									disabled={isSubmitting}
									variant={'contained'}
									color={'primary'}>
            Find
          </Button>
        </Form>
      )}
    </Formik>
  </div>
})