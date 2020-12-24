import React, { useState } from 'react';
import styled from 'styled-components';

const JoinFormBlock = styled.form`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  width: 100%;
  left: 0;
  ul {
    list-style:none
  }
  li {
    list-style:none;
    margin-bottom: 10px;
  }
  button {
    height: 46px;
    width: 100%;
    background-color: #51abf3;
    color: #fff;
    border-radius: 3px;
    vertical-align: middle;
    font-size: 20px;
    cursor: pointer;
    padding-left: 0!important;
    padding-right: 0!important;
    text-align: center;
    disabled;
  }
  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%; 
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    margin-right: 15px;
  }
  textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }
  select {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    margin-right: 15px;
  }
  p.is-invalid {
    color: #ff8000; 
  }
`;

function JoinForm() {
  const [id, setId] = useState('');
  const [idError, setIdError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  const [middleName, setMiddleName] = useState('');
  const [middleNameError, setMiddleNameError] = useState(false)

  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false)

  const [koName, setKoName] = useState('');
  const [koNameError, setKoNameError] = useState(false);

  const [sex, setSex] = useState('');
  const [sexError, setSexError] = useState(false);

  const [birth, setBirth] = useState('');
  const [birthError, setBirthError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // 유효성체크
  }

  // 유효성 체크 - ID 
  const onChangeId = (e) => {
    const regExp = /^[a-zA-Z0-9]{4,12}$/; // 4~12자의 영문과 숫자 허용
    setIdError(!regExp.test(e.target.value))
    setId(e.target.value);
  }

  // 유효성 체크 - 비밀번호 
  const onChangePassword = (e) => {
    const regExp = /^[a-zA-Z0-9]{4,12}$/; // 4~12자의 영문과 숫자 허용
    setPasswordError(!regExp.test(e.target.value))
    setPassword(e.target.value);
  }

  // 유효성 체크 - 비밀번호 확인 
  const onChangePasswordCheck = (e) => {
    setPasswordCheckError(e.target.value !== password)
    setPasswordCheck(e.target.value);
  }

  // 유효성 체크 - 영문 이름 
  const onChangeMiddleName = (e) => {
    const regExp = /^[a-zA-Z\s]{2,20}$/; // 2~20자의 영문과 공백 허용
    setMiddleNameError(!regExp.test(e.target.value));
    setMiddleName(e.target.value);
  }

  // 유효성 체크 - 영문 성 
  const onChangeFirstName = (e) => {
    const regExp = /^[a-zA-Z\s]{2,20}$/; // 2~20자의 영문과 공백 허용
    setFirstNameError(!regExp.test(e.target.value));
    setFirstName(e.target.value);
  }

  // 유효성 체크 - 한글 이름 
  const onChangeKoName = (e) => {
    const regExp = /^[가-힣]{2,20}$/; // 2~20자의 한글만 허용
    setKoNameError(!regExp.test(e.target.value));
    setKoName(e.target.value);
  }

  // 유효성 체크 - 생년월일  
  const onChangeBirth = (e) => {
    const regExp = /^[0-9]{0,6}$/; // 숫자만 허용
    setBirthError(!regExp.test(e.target.value));
    setBirth(e.target.value);
  } 

  return (
    <div>
      <h2>ReactJS로 만드는 회원가입</h2>
      <JoinFormBlock onSubmit={onSubmit}>
        <label for='user_id'>
          <p>ID</p>
          <div>
            <input 
              type='text' 
              name='user_id' 
              value={id} 
              onChange={onChangeId} 
            />
            {
              idError && (<p className='is-invalid'>4~12자의 영문 대소문자와 숫자로만 입력 가능합니다.</p>)
            }
          </div>
        </label>
        <label for='user_password'>
          <p>비밀번호</p>
          <div>
            <input 
              type='password' 
              name='user_password' 
              value={password} 
              onChange={onChangePassword} 
            />
            {
              passwordError && (<p className='is-invalid'>4~12자의 영문 대소문자와 숫자로만 입력 가능합니다.</p>)
            }
          </div>
        </label>
        <label for='user_password_check'>
          <p>비밀번호 확인</p>
          <div>
            <input 
              type='password' 
              name='user_password_check' 
              value={passwordCheck} 
              onChange={onChangePasswordCheck} 
            />
            {
              passwordCheckError && (<p className='is-invalid'>비밀번호가 일치하지 않습니다.</p>)
            }
          </div>
        </label>
        <label for='user_middle_name'>
          <p>영문 이름</p>
          <div>
            <input 
              type='text' 
              name='user_middle_name' 
              placeholder='Gil Dong'
              value={middleName} 
              onChange={onChangeMiddleName} 
            />
            {
              middleNameError && (<p className='is-invalid'>2~20자의 영문 대소문자와 공백만 입력 가능합니다.</p>)
            }
          </div>
        </label>
        <label for='user_first_name'>
          <p>영문 성</p>
          <div>
            <input 
              type='text' 
              name='user_first_name' 
              placeholder='Hong'
              value={firstName} 
              onChange={onChangeFirstName} 
            />
            {
              firstNameError && (<p className='is-invalid'>2~20자의 영문 대소문자와 공백만 입력 가능합니다.</p>)
            }
          </div>
        </label>
        <label for='user_ko_name'>
          <p>한글 이름</p>
          <div>
            <input 
              type='text' 
              name='user_ko_name' 
              placeholder='홍길동'
              value={koName} 
              onChange={onChangeKoName} 
            />
            {
              koNameError && (<p className='is-invalid'>2~20자의 한글만 입력 가능합니다.</p>)
            }
          </div>
        </label>
        <label for='user_sex'>
          <p>성별</p>
          <ul>
            <li>
              <div>
                <input 
                  type='radio' 
                  name='user_sex' 
                  value='male' 
                  checked={sex === 'male'}
                  onClick={() => setSex('male')}
                />
                <span>남</span>
              </div>
            </li>
            <li>
              <div>
                <input 
                  type='radio' 
                  name='user_sex' 
                  value='female' 
                  checked={sex === 'female'}
                  onClick={() => setSex('female')}
                />
                <span>여</span>
              </div>
            </li>
          </ul>
          {
            sexError && (<p className='is-invalid'>{}</p>)
          }
        </label>
        <label for='user_birth'>
          <p>생년월일</p>  
          <div>
            <input 
              type='text' 
              name='user_birth' 
              placeholder='YYMMDD'
              value={birth}
              onChange={onChangeBirth} 
            />
            {
              birthError && (<p className='is-invalid'>6자리의 생년월일을 입력해 주세요.(YYMMDD)</p>)
            }
          </div>
        </label>
        <div>
          <button type='submit'>
            Join
          </button>
        </div>
      </JoinFormBlock>
    </div>
  )
}

export default React.memo(JoinForm);