import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// ReduxForm handles the state of our form, it doesn't take care of performing actions (POST, GET, etc)
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    // this === component
    // We want to call an ActionCreator which will be responsible to POST to the API
    this.props.createPost(values, () => {
      // We need to navigate back to the root page only after the post has been created
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField} />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField} />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField} />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) { // object that contains all the values that the user enters
  const errors = {};

  if (!values.title) {
    errors.title = "Please enter a title.";
  }
  if (!values.categories) {
    errors.categories = "Please enter some categories."
  }
  if (!values.content) {
    errors.content = "Please enter some content."
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' // this needs to be unique in the application
})(
  connect(null, { createPost })(PostsNew)
);
