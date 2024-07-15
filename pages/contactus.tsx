import { FC, Fragment, useState } from 'react';
import { useForm, FieldError } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhatsAppButton from 'components/common/WhatsAppButton';

interface FormData {
  name: string;
  email: string;
  phoneno: string;
  type: string;
  message: string;
}

const Contactus: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (data.name && data.email && data.message && data.phoneno && data.type) {
      setIsLoading(true);
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      // Create a new object that contains dynamic template params
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phoneno: data.phoneno,
        from_type: data.type,
        to_name: 'Dilli Vibes Team',
        message: data.message
      };

      // Send the email using EmailJS
      emailjs
        .send(serviceId as string, templateId as string, templateParams, publicKey as string)
        .then((response) => {
          console.log('Email sent successfully!', response);
          setIsLoading(false);
          toast.success('Form submitted successfully.');
          reset();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setIsLoading(false);
          toast.error('Failed to send the form. Please try again.');
        });
    }
  };

  return (
    <Fragment>
      <PageProgress />
      <WhatsAppButton />
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>
      {/* ========== title section ========== */}
      <section className="section-frame overflow-hidden mb-10">
        <div className="wrapper bg-gray">
          <div className="container py-8 py-md-10 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1 className="display-1 mb-1">Contact with Dilli Vibes</h1>
                {/* <button onClick={notify}>Notify!</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    <h2 className="display-5 mb-3 text-center">Fill out the form</h2>
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
                              {...register('name', {
                                required: 'Name is required.',
                                pattern: {
                                  value: /^[A-Za-z\s]+$/,
                                  message: 'Name can only contain letters and spaces.'
                                }
                              })}
                              className="form-control bg-white-700 border-0"
                              onBlur={(e) => setValue('name', e.target.value.trim())}
                            />
                            {errors.name && <h6 style={{ color: '#E21F25' }}>{(errors.name as FieldError).message}</h6>}
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
                              {...register('email', {
                                required: 'Email is required.',
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: 'Invalid email address.'
                                }
                              })}
                              placeholder="alok@example.com"
                              className="form-control bg-white-700 border-0"
                              onBlur={(e) => setValue('email', e.target.value.trim())}
                            />
                            {errors.email && (
                              <h6 style={{ color: '#E21F25' }}>{(errors.email as FieldError).message}</h6>
                            )}
                            <label htmlFor="form_email">Email *</label>
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please provide a valid email address.</div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating mb-4">
                            <input
                              required
                              type="text"
                              id="form_phoneno"
                              {...register('phoneno', {
                                required: 'Phone number is required.',
                                pattern: {
                                  value: /^[0-9]+$/,
                                  message: 'Phone number can only contain digits.'
                                }
                              })}
                              placeholder="Contact No."
                              className="form-control bg-white-700 border-0"
                              onBlur={(e) => setValue('phoneno', e.target.value.trim())}
                            />
                            {errors.phoneno && (
                              <h6 style={{ color: '#E21F25' }}>{(errors.phoneno as FieldError).message}</h6>
                            )}
                            <label htmlFor="Contact_No">Contact No *</label>
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please provide a valid phone number.</div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-select-wrapper mb-4">
                            <select
                              className="form-select"
                              id="form_type"
                              required
                              {...register('type', { required: 'Selection is required.' })}
                              onBlur={(e) => setValue('type', e.target.value.trim())}
                            >
                              <option value="">Select</option>
                              <option value="Hotels">Hotels</option>
                              <option value="Rooms">Rooms</option>
                              <option value="Both">Both</option>
                            </select>
                            {errors.type && <h6 style={{ color: '#E21F25' }}>{(errors.type as FieldError).message}</h6>}
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please select a department.</div>
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
                              {...register('message', { required: 'Message is required.' })}
                              onBlur={(e) => setValue('message', e.target.value.trim())}
                            />
                            {errors.message && (
                              <h6 style={{ color: '#E21F25' }}>{(errors.message as FieldError).message}</h6>
                            )}
                            <label htmlFor="form_message">Message *</label>
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please enter your message.</div>
                          </div>
                        </div>

                        <div className="col-12 text-center">
                          <input
                            type="submit"
                            className="btn btn-primary rounded-pill btn-send"
                            disabled={isLoading}
                            value={`${isLoading ? 'Loading...' : 'Send message'}`}
                          />
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
      <div className="wrapper bg-light angled upper-end mt-20 w-90">
        <div className="container">
          {/* ========== contact info section ========== */}
          <div className="row mb-14 mb-md-16">
            <div className="col-xl-10 mx-auto mt-n19">
              <div className="card">
                <div className="row gx-0">
                  <div className="col-lg-6 align-self-stretch">
                    <div className="map map-full rounded-top rounded-lg-start">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.0923689088986!2d78.38835827458117!3d28.83610987480853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b090071c4b12f%3A0x18d58e6b8c8f297e!2z4KSm4KS_4KSy4KWN4KSy4KWAIOCkteCkv-CkrOClh-CkuA!5e0!3m2!1shi!2sin!4v1715522971227!5m2!1shi!2sin"
                        width="600"
                        height="450"
                        style={{ width: '100%', height: '100%', border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy=""
                      ></iframe>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="p-10 p-md-11 p-lg-14">
                      <div className="d-flex flex-row">
                        <div>
                          <div className="icon text-primary fs-28 me-4 mt-n1">
                            <i className="uil uil-location-pin-alt" />
                          </div>
                        </div>
                        <div className="align-self-start justify-content-start">
                          <h5 className="mb-1">Address</h5>
                          <address>NH-9, Road, Delhi, Atrasi, Uttar Pradesh 244221</address>
                        </div>
                      </div>

                      <div className="d-flex flex-row">
                        <div>
                          <div className="icon text-primary fs-28 me-4 mt-n1">
                            <i className="uil uil-phone-volume" />
                          </div>
                        </div>
                        <div>
                          <h5 className="mb-1">Phone</h5>
                          <NextLink title="7055101235" href="tel:7055101235" />
                          {/* <br /> */} &nbsp;
                          <NextLink title="7817851235" href="tel:7817851235" />
                          <br />
                          <NextLink title="5922246555" href="tel:5922246555" />
                          {/* <br /> */} &nbsp;
                          <NextLink title="9411835668" href="tel:9411835668" />
                        </div>
                      </div>

                      <div className="d-flex flex-row">
                        <div>
                          <div className="icon text-primary fs-28 me-4 mt-n1">
                            <i className="uil uil-envelope" />
                          </div>
                        </div>
                        <div>
                          <h5 className="mb-1">E-mail</h5>
                          <p className="mb-0">
                            <NextLink title="dillivibes23@gmail.com" href="mailto:dillivibes23@gmail.com" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Footer8 />
    </Fragment>
  );
};

export default Contactus;
