import PropTypes from 'prop-types';
import inititalState from './initialState';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { Form } from 'shared/components/Page.styled';

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';

import { getIsLoading } from 'redux/contacts/contacts-selectors';
import { ColorRing } from 'react-loader-spinner';
import Button from '@mui/material/Button';

import { useSelector } from 'react-redux';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .min(6, 'Name should be of minimum 6 characters length')
    .required('nickname is required'),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { ...inititalState },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const result = onSubmit(values);
      if (result) {
        resetForm();
      }
    },
  });

  const isLoading = useSelector(getIsLoading);

  return (
    <Box
      marginBottom='30px'
      marginLeft="auto"
      marginRight="auto"
      boxShadow={
        ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
      }
      backgroundColor="#ffff"
      borderRadius='5px'
    >
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="number"
          name="number"
          label="phone"
          required
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: 30,
            maxWidth: 150,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {!isLoading && (
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              style={{
                display: 'flex',
                borderRadius: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Add contact
            </Button>
          )}
          {isLoading && (
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          )}
        </div>
      </Form>
    </Box>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
