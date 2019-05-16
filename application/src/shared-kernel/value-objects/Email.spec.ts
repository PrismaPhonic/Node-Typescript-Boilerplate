import { expect, assert } from 'chai';
import * as faker from 'faker';
import 'mocha';
import { Email } from "./Email.model";

describe('test email value object validity testing', () => {
  it('should successfully store a valid email address.', () => {
    const emailString = faker.internet.email();
    const goodFunction = () => {
      return new Email(emailString);
    };
    expect(goodFunction).to.not.throw();
    expect(goodFunction().value).equals(emailString);
  });

  it('should fail to store an in-valid email address.', () => {
    const email = faker.internet.email();
    const badEmail = email.replace('@', '#');
    const badFunction = () => {
      new Email(badEmail);
    };
    expect(badFunction).to.throw();
  });

  it('should provide capabilities to extract the domain from the email.', () => {
    const emailString = "test@domain.com";
    let email = new Email(emailString);

    expect(email.domain).equals("domain.com");
  });

  it('should provide capabilities to extract the local part of the email.', () => {
    const emailString = "test@domain.com";
    let email = new Email(emailString);

    expect(email.local).equals("test");
  });
});

describe('test email value object inner equality checking', () => {
  it('should confirm inner equality of two value objects holding same email address', () => {
    const emailString = faker.internet.email();
    const emailObj1 = new Email(emailString);
    const emailObj2 = new Email(emailString);

    assert.isTrue(emailObj1.equals(emailObj2));
  });

  it('should indicate non inner-equality for two email objects with different internal email strings', () => {
    const emailString1 = faker.internet.email();
    const emailObj1 = new Email(emailString1);

    const emailString2 = faker.internet.email();
    const emailObj2 = new Email(emailString2);

    assert.isFalse(emailObj1.equals(emailObj2));
  });
});
