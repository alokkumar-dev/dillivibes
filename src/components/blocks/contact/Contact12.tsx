import { FC } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact12: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset 
  } = useForm();

  const onSubmit = (data: any) => {
    if (data?.name != '' && data?.email != '' && data?.message != '') {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      // Create a new object that contains dynamic template params
      const templateParams = {
        from_name: data?.name,
        from_email: data?.email,
        to_name: 'Dilli Vibes Team',
        message: data?.message
      };

      // Send the email using EmailJS
      emailjs
        .send(serviceId as string, templateId as string, templateParams, publicKey as string)
        .then((response) => {
          console.log('Email sent successfully!', response);
          alert('Email sent successfully!');
          reset();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  };

  return (
    <section id="pricing">
      <div
        className="wrapper image-wrapper bg-image bg-overlay"
        style={{ backgroundImage: 'url(/img/photos/bg36.jpg)' }}
      >
        <div className="container py-15 py-md-17">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="card border-0 bg-white-900">
                <div className="card-body py-lg-13 px-lg-16">
                  <h2 className="display-5 mb-3 text-center">Contact with DilliVibes</h2>
                  <p className="lead fs-lg text-center mb-10">
                    For more information please get in touch using the form below:
                  </p>
                  <form
                    className="contact-form needs-validation"
                    method="post"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="messages"></div>
                    <div className="row gx-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            required
                            type="text"
                            id="form_name"
                            placeholder="Name"
                            {...register('name', { required: true })}
                            className="form-control bg-white-700 border-0"
                          />
                          {errors.name && <p>Last name is required.</p>}
                          <label htmlFor="form_name">Name *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter your name.</div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            required
                            type="email"
                            id="form_email"
                            {...register('email', { required: true })}
                            placeholder="jane.doe@example.com"
                            className="form-control bg-white-700 border-0"
                          />
                          {errors.email && <p>Last email is required.</p>}
                          <label htmlFor="form_email">Email *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please provide a valid email address.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <textarea
                            required
                            id="form_message"
                            placeholder="Your message"
                            className="form-control bg-white-700 border-0"
                            style={{ height: 150 }}
                            {...register('message', { required: true })}
                          />
                          {errors.message && <p>Last message is required.</p>}
                          <label htmlFor="form_message">Message *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter your messsage.</div>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <input type="submit" className="btn btn-primary rounded-pill btn-send" value="Send message" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact12;
