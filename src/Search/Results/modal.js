import React from 'react';
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Buy } from './card';
import { useHistory } from "react-router-dom";


const ModalWrapper = styled.div`
    z-index:100;
    width:300px;
    height: 500px;
    border:5px solid #00b0de;
    border-radius: 20px;
    background-color: white;
    position: absolute;
    top:0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding:20px 100px;
`

export function MyForm ({openModal, setOpenModal}) {
    const history = useHistory()
    const onSubmit= async values => {
        setOpenModal(false)
        history.push('/card')
      }
      return (
          <ModalWrapper>
              <div onClick={()=>setOpenModal(false)} style={{display:'flex', justifyContent:'flex-end'}}><div>x</div></div>
        <Form 
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form  onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
              <label>First Name</label>
              <Field
              style={{
                
                  width: '100%',
                  padding: '12px 20px',
                  margin:' 8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
              <label>Last Name</label>
              <Field style={{
                
                  width: '100%',
                  padding: '12px 20px',
                  margin:' 8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
              <label>Age</label>
              <Field style={{
                
                  width: '100%',
                  padding: '12px 20px',
                  margin:' 8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
                name="Age"
                component="input"
                type="text"
                placeholder="Age"
              />
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
              <label>INN</label>
              <Field style={{
                
                  width: '100%',
                  padding: '12px 20px',
                  margin:' 8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
                name="INN"
                component="input"
                type="text"
                placeholder="INN"
              />
            </div>
            <div >
              <label>Подтвердить</label>
              <Field style={{
                
                  width: '100%',
                  padding: '12px 20px',
                  margin:' 8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }} name="employed" component="input" type="checkbox" />
            </div>
            <div className="buttons" style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            {/* <Link to='/card'> */}
                <Buy  type="submit" disabled={submitting || pristine}>
                Submit
              </Buy>
            {/* </Link> */}
              <Buy
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </Buy>
            </div>
          </form>
        )}
      />
          </ModalWrapper>
      )
}
