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

  const [birthYear, setBirthYear] = useState('')
  const [birthYearError, setBirthYearError] = useState(false);
  let yearSelect = [];
  for(let i = 2020; i > 1920; i--) {
    yearSelect.push(<option value={i}>{i}</option>)
  }

  const [birthMonth, setBirthMonth] = useState('')
  const [birthMonthError, setBirthMonthError] = useState(false);
  let monthSelect = [];
  for(let i = 1; i <= 12; i++) {
    monthSelect.push(<option value={i}>{i}</option>)
  }

  const [birthDay, setBirthDay] = useState('')
  const [birthDayError, setBirthDayError] = useState(false);
  let daySelect = [];
  for(let i = 1; i <= 31; i++) {
    daySelect.push(<option value={i}>{i}</option>)
  }

  const [exInfo, setExInfo] = useState('');
  const [exInfoError, setExInfoError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // 유효성체크
  }

  // 유효성 체크 - ID (4~12자의 영문과 숫자 허용) 
  const onChangeId = (e) => {
    const regExp = /^[a-zA-Z0-9]{4,12}$/;  
    setIdError(!regExp.test(e.target.value))
    setId(e.target.value);
  }

  // 유효성 체크 - 비밀번호 (4~12자의 영문과 숫자 허용) 
  const onChangePassword = (e) => {
    const regExp = /^[a-zA-Z0-9]{4,12}$/;  
    setPasswordError(!regExp.test(e.target.value))
    setPassword(e.target.value);
  }

  // 유효성 체크 - 비밀번호 확인 
  const onChangePasswordCheck = (e) => {
    setPasswordCheckError(e.target.value !== password)
    setPasswordCheck(e.target.value);
  }

  // 유효성 체크 - 영문 이름 (2~20자의 영문과 공백 허용) 
  const onChangeMiddleName = (e) => {
    const regExp = /^[a-zA-Z\s]{2,20}$/;  
    setMiddleNameError(!regExp.test(e.target.value));
    setMiddleName(e.target.value);
  }

  // 유효성 체크 - 영문 성 (2~20자의 영문과 공백 허용) 
  const onChangeFirstName = (e) => {
    const regExp = /^[a-zA-Z\s]{2,20}$/;  
    setFirstNameError(!regExp.test(e.target.value));
    setFirstName(e.target.value);
  }

  // 유효성 체크 - 한글 이름 (2~20자의 한글만 허용) 
  const onChangeKoName = (e) => {
    const regExp = /^[가-힣]{2,20}$/;  
    setKoNameError(!regExp.test(e.target.value));
    setKoName(e.target.value);
  }

  const onChangeBirthYear = (e) => {
    setBirthYearError(e.target.value === '')
    setBirthYear(e.target.value);
  }

  const onChangeBirthMonth = (e) => {
    setBirthMonthError(e.target.value === '')
    setBirthMonth(e.target.value);
  }

  const onChangeBirthDay = (e) => {
    setBirthDayError(e.target.value === '')
    setBirthDay(e.target.value);
  }

  const onChangeExInfo = (e) => {
    setExInfoError(e.target.value.length > 20);
    setExInfo(e.target.value);
  }

  return (
    <div>
      <h2>ReactJS로 만드는 회원가입</h2>
      <JoinFormBlock onSubmit={onSubmit}>
        <label for='user_id'>
          <p>ID</p>
          <div>
            <input type='text' name='user_id' value={id} onChange={onChangeId} />
            { idError && (<p className='is-invalid'>4~12자의 영문 대소문자와 숫자로만 입력 가능합니다.</p>) }
          </div>
        </label>
        <label for='user_password'>
          <p>비밀번호</p>
          <div>
            <input type='password' name='user_password' value={password} onChange={onChangePassword} />
            { passwordError && (<p className='is-invalid'>4~12자의 영문 대소문자와 숫자로만 입력 가능합니다.</p>) }
          </div>
        </label>
        <label for='user_password_check'>
          <p>비밀번호 확인</p>
          <div>
            <input type='password' name='user_password_check' value={passwordCheck} onChange={onChangePasswordCheck} />
            { passwordCheckError && (<p className='is-invalid'>비밀번호가 일치하지 않습니다.</p>) }
          </div>
        </label>
        <label for='user_middle_name'>
          <p>영문 이름</p>
          <div>
            <input type='text' name='user_middle_name' placeholder='Gil Dong' value={middleName} onChange={onChangeMiddleName} />
            { middleNameError && (<p className='is-invalid'>2~20자의 영문 대소문자와 공백만 입력 가능합니다.</p>) }
          </div>
        </label>
        <label for='user_first_name'>
          <p>영문 성</p>
          <div>
            <input type='text' name='user_first_name' placeholder='Hong' value={firstName} onChange={onChangeFirstName} />
            { firstNameError && (<p className='is-invalid'>2~20자의 영문 대소문자와 공백만 입력 가능합니다.</p>) }
          </div>
        </label>
        <label for='user_ko_name'>
          <p>한글 이름</p>
          <div>
            <input type='text' name='user_ko_name' placeholder='홍길동' value={koName} onChange={onChangeKoName} />
            { koNameError && (<p className='is-invalid'>2~20자의 한글만 입력 가능합니다.</p>) }
          </div>
        </label>
        <label for='user_sex'>
          <p>성별</p>
          <ul>
            <li>
              <div>
                <input type='radio' name='user_sex' value='male' checked={sex === 'male'} onClick={() => setSex('male')} />
                <span>남</span>
              </div>
            </li>
            <li>
              <div>
                <input type='radio' name='user_sex' value='female' checked={sex === 'female'} onClick={() => setSex('female')} />
                <span>여</span>
              </div>
            </li>
          </ul>
          { sexError && (<p className='is-invalid'>{}</p>) }
        </label>
        생일
        <div>
          <label for='birth_year'>
            <select name='birth_year' value={birthYear} onChange={onChangeBirthYear}>
              <option value=''>YYYY</option>
              {yearSelect.map(e => e)}
            </select>
          </label>       
          년 
          <label for='birth_month'>
            <select name='birth_month' value={birthMonth} onChange={onChangeBirthMonth}>
              <option value=''>MM</option>
              {monthSelect.map(e => e)}
            </select>
          </label>       
          월 
          <label for='birth_day'>
            <select name='birth_day' value={birthDay} onChange={onChangeBirthDay}>
              <option value=''>DD</option>
              {daySelect.map(e => e)}
            </select>
          </label>       
          일 
          { (birthYearError || birthMonthError || birthDayError) && (<p className='is-invalid'>생년월일을 입력해 주세요</p>) }
        </div>
        <label for='ex_info'>
          <p>문의사항</p>  
          <div>
            <textarea name='ex_info' value={exInfo} placeholder='문의사항을 입력해 주세요.' onChange={onChangeExInfo} />
            { exInfoError && (<p className='is-invalid'>200자 이하로 입력해 주세요.</p>) }
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