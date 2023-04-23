const FormInput = (label, placeholder, id, warningMessage, type) => `
        <div class="form-input-section">
        ${
          warningMessage === '' ? '' : ''
          // : `<div class="warning-container">
          //     <i class="fa-solid fa-circle-exclamation warning-icon"></i>
          //     <p class="warning-message">${warningMessage}</p>
          //   </div>`
          // `<div class="notification-box flex flex-col items-center justify-center fixed w-full z-50 p-3"></div`
        }
            <label for=${id} class="form-label">${label}</label>
            <div class="form-input-container">
              <input type=${type} name=${id} id=${id} class="form-input" placeholder=${placeholder} />
              ${type === 'password' ? `<i class="fa-solid fa-eye show-password-btn" id="show-password"></i>` : ''}
            </div>
        </div>
`;

export default FormInput;
