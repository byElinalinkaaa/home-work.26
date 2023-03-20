/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import { Grid, TextField, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { signIn } from '../store/auth/auth.thunk'

export const SignInPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const submitHandler = ({ email, password }) => {
        const loginData = {
            email,
            password,
        }

        setError('')

        dispatch(signIn(loginData))
            .unwrap()
            .then(() => navigate('/'))
            .catch((e) => setError(e.response.data.message))
    }
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: submitHandler,
    })
    // const { values, handleChange, handleSubmit } = formik

    const isEmailValid = () => {
        return (
            values.email.length === 0 ||
            (values.email.length > 0 && values.email.includes('@'))
        )
    }

    const isPasswordValid = () => {
        return (
            values.password.length === 0 ||
            (values.password.length > 0 && values.password >= 5)
        )
    }

    return (
        <Grid display="flex" justifyContent="center" marginTop={20}>
            <StyledGrid>
                <form onSubmit={handleSubmit}>
                    <Grid display="flex" flexDirection="column">
                        <TextField
                            name="email"
                            value={values.email}
                            label="Email"
                            error={!isEmailValid}
                            onChange={handleChange}
                        />
                        <TextField
                            name="password"
                            value={values.password}
                            label="password"
                            error={!isPasswordValid}
                            onChange={handleChange}
                        />
                        {error && <Typography>{error}</Typography>}
                        <Button type="submit">sign in</Button>
                        <Link to="/signup">{`Don't have account`}</Link>
                    </Grid>
                </form>
            </StyledGrid>
        </Grid>
    )
}

const StyledGrid = styled(Grid)(() => ({
    backgroundColor: '#FFF',
    width: '350px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
}))
