import axios from "axios";
const baseUrl = "http://ec2-54-166-227-206.compute-1.amazonaws.com:9090/";

const getJWTToken = () => {
  return axios.post(
    baseUrl + "authenticate",
    { password: "12345", username: "ankit@gmail.com" },
    { headers: { "Content-Type": "application/json" } }
  );
};

// user apis
export const getAllUser = async () => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + "user", {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addUser = async (
  email,
  lobCode,
  password,
  roleCode,
  userName,
  userStatus
) => {
  console.log(
    "inside api",
    email,
    lobCode,
    password,
    roleCode,
    userName,
    userStatus
  );
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl + "user",
      {
        email: email,
        lobCode: lobCode,
        password: password,
        roleCode: roleCode,
        status: userStatus,
        userId: email,
        userName: userName,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );

    return res;
  } catch (e) {
    console.log(e);
  }
};
export const getUserById = async (userId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `user/${userId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async ({
  email,
  userId,
  status,
  roleCode,
  lobCode,
  password,
  userName,
}) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.put(
      baseUrl + `user/${userId}`,
      {
        email: email,
        lobCode: lobCode,
        password: password,
        roleCode: roleCode,
        status: status,
        userId: userId,
        userName: userName,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (userId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.delete(baseUrl + `user/${userId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });

    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserByEmail = async (userEmail) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `user/userEmail/${userEmail}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

// role apis
export const getAllRole = async () => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + "role", {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addRole = async ({ roleCode, roleName, roleStatus }) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl + "role",
      {
        roleCode: roleCode,
        roleName: roleName,
        status: roleStatus,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getRoleById = async (roleId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `role/${roleId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateRole = async ({
  roleId,
  roleName,
  roleCode,
  roleStatus,
}) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.put(
      baseUrl + `role/${roleId}`,
      { roleCode: roleCode, roleName: roleName, status: roleStatus },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const deleteRole = async (roleId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.delete(baseUrl + `role/${roleId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });

    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getRoleByRoleCode = async (roleCode) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `role/roleCode/${roleCode}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });

    const data = res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};

//   action apis
export const getAllAction = async () => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + "action", {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addAction = async (
  actionCode,
  actionName,
  canCreate,
  canDelete,
  canUpdate,
  canRead,
  roleCode,
  roleName,
  roleStatus,
  actionStatus
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl + "action",
      {
        actionCode: actionCode,
        actionName: actionName,
        canCreate: canCreate,
        canDelete: canDelete,
        canRead: canRead,
        canUpdate: canUpdate,
        roleModel: {
          roleCode: roleCode,
          roleName: roleName,
          status: roleStatus,
        },
        status: actionStatus,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );

    const data = res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateAction = async (
  actionId,
  actionCode,
  actionName,
  canCreate,
  canDelete,
  canRead,
  canUpdate,
  roleCode,
  roleName,
  roleStatus,
  actionStatus
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.put(
      baseUrl + `action/${actionId}`,
      {
        actionCode: actionCode,
        actionName: actionName,
        canCreate: canCreate,
        canDelete: canDelete,
        canRead: canRead,
        canUpdate: canUpdate,
        roleModel: {
          roleCode: roleCode,
          roleName: roleName,
          status: roleStatus,
        },
        status: actionStatus,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAction = async (actionId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.delete(baseUrl + `action/${actionId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getActionByCode = async (actionCode) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `action/actionCode/${actionCode}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getActionByRoleCode = async (roleCode) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `action/roleCode/${roleCode}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

// risk layer yet to add

// lob apis

export const getAllLOB = async () => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + "lob", {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addLOB = async ({ lobCode, lobName, lobStatus }) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl + "lob",
      {
        lobCode: lobCode,
        lobName: lobName,
        status: lobStatus,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateLOB = async ({ lobId, lobCode, lobName, lobStatus }) => {
  console.log("lob data", lobId, lobCode, lobName, lobStatus);
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.put(
      baseUrl + `lob/${lobId}`,
      { lobCode: lobCode, lobName: lobName, status: lobStatus },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const deleteLOB = async (lobId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.delete(baseUrl + `lob/${lobId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getLOBByLOBCode = async (lobCode) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `lob/lobCode/${lobCode}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

// email entity

export const getAllEmailEntity = async () => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + "email", {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addEmailEntity = async (
  isAccounting,
  isClaim,
  isUnderwriting,
  emailEntity,
  lobCode,
  salutation,
  emailStatus
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl + "email",
      {
        accounting: isAccounting,
        claim: isClaim,
        email: emailEntity,
        expireDate: "2022-05-06T11:34:42.444Z",
        lobCode: lobCode,
        salutation: salutation,
        status: emailStatus,
        underwriting: isUnderwriting,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getEmailEntityById = async (emailEntityId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `email/${emailEntityId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateEmailEntity = async (emailEntityId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.put(baseUrl + `email/${emailEntityId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

// tax documentation

export const getAllTaxDocument = async () => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + "/taxDocument", {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    console.log(res);
    const data = res.data;
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addTaxDocument = async (
  baseCurrency,
  entityAddress,
  entityEndFy,
  entityHostName,
  entityHostPort,
  entityId,
  entityLegalName,
  entityShortName,
  entityStartFy,
  entityType,
  homeCountry,
  incomeTaxIdentificationNumber,
  pinCode,
  rating,
  ratingAgency,
  stateCode,
  businessStatus,
  tdsWhtRateApplicable,
  document,
  endDate,
  isRequired,
  startDate
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl + "/taxDocument",
      {
        businessModel: {
          baseCurrency: baseCurrency,
          entityAddress: entityAddress,
          entityEndFy: entityEndFy,
          entityHostName: entityHostName,
          entityHostPort: entityHostPort,
          entityId: entityId,
          entityLegalName: entityLegalName,
          entityShortName: entityShortName,
          entityStartFy: entityStartFy,
          entityType: entityType,
          homeCountry: homeCountry,
          incomeTaxIdentificationNumber: incomeTaxIdentificationNumber,
          pinCode: pinCode,
          rating: rating,
          ratingAgency: ratingAgency,
          stateCode: stateCode,
          status: businessStatus,
          tdsWhtRateApplicable: tdsWhtRateApplicable,
        },
        documentName: document,
        endDate: endDate,
        isRequired: isRequired,
        startDate: startDate,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getTaxDocumentById = async (taxId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `/taxDocument/${taxId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteTaxDocument = async (taxId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.delete(baseUrl + `/taxDocument/${taxId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const updateTaxDocument = async (
  taxId,
  baseCurrency,
  entityAddress,
  entityEndFy,
  entityHostName,
  entityHostPort,
  entityId,
  entityLegalName,
  entityShortName,
  entityStartFy,
  entityType,
  homeCountry,
  incomeTaxIdentificationNumber,
  pinCode,
  rating,
  ratingAgency,
  stateCode,
  businessStatus,
  tdsWhtRateApplicable,
  document,
  endDate,
  isRequired,
  startDate
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.put(
      baseUrl + `/taxDocument/${taxId}`,
      {
        businessModel: {
          baseCurrency: baseCurrency,
          entityAddress: entityAddress,
          entityEndFy: entityEndFy,
          entityHostName: entityHostName,
          entityHostPort: entityHostPort,
          entityId: entityId,
          entityLegalName: entityLegalName,
          entityShortName: entityShortName,
          entityStartFy: entityStartFy,
          entityType: entityType,
          homeCountry: homeCountry,
          incomeTaxIdentificationNumber: incomeTaxIdentificationNumber,
          pinCode: pinCode,
          rating: rating,
          ratingAgency: ratingAgency,
          stateCode: stateCode,
          status: businessStatus,
          tdsWhtRateApplicable: tdsWhtRateApplicable,
        },
        documentName: document,
        endDate: endDate,
        isRequired: isRequired,
        startDate: startDate,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

// Calucaltion

export const addCalculation = async (
  baseCurrency,
  entityAddress,
  entityEndFy,
  entityHostName,
  entityHostPort,
  entityId,
  entityLegalName,
  entityShortName,
  entityStartFy,
  entityType,
  homeCountry,
  incomeTaxIdentificationNumber,
  pinCode,
  rating,
  ratingAgency,
  stateCode,
  calculationStatus,
  tdsWhtRateApplicable,
  calculationCode,
  field1Name,
  field1Type,
  field2Name,
  field2Type,
  field3Name,
  field3Type,
  field4Name,
  field4Type,
  field5Name,
  field5Type,
  operation1_2,
  operation2_3,
  operation3_4,
  operation4_5,
  taxName
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl + "calculation",
      {
        businessModel: {
          baseCurrency: baseCurrency,
          entityAddress: entityAddress,
          entityEndFy: entityEndFy,
          entityHostName: entityHostName,
          entityHostPort: entityHostPort,
          entityId: entityId,
          entityLegalName: entityLegalName,
          entityShortName: entityShortName,
          entityStartFy: entityStartFy,
          entityType: entityType,
          homeCountry: homeCountry,
          incomeTaxIdentificationNumber: incomeTaxIdentificationNumber,
          pinCode: pinCode,
          rating: rating,
          ratingAgency: ratingAgency,
          stateCode: stateCode,
          status: calculationStatus,
          tdsWhtRateApplicable: tdsWhtRateApplicable,
        },
        calculationCode: calculationCode,
        field1Name: field1Name,
        field1Type: field1Type,
        field2Name: field2Name,
        field2Type: field2Type,
        field3Name: field3Type,
        field3Type: field3Name,
        field4Name: field4Name,
        field4Type: field4Type,
        field5Name: field5Name,
        field5Type: field5Type,
        operation1_2: operation1_2,
        operation2_3: operation2_3,
        operation3_4: operation3_4,
        operation4_5: operation4_5,
        taxName: taxName,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );

    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addTax = async (
  baseCurrency,
  entityAddress,
  entityEndFy,
  entityHostName,
  entityHostPort,
  entityId,
  entityLegalName,
  entityShortName,
  entityStartFy,
  entityType,
  homeCountry,
  incomeTaxIdentificationNumber,
  pinCode,
  rating,
  ratingAgency,
  stateCode,
  calculationStatus,
  tdsWhtRateApplicable,
  calculationCode,
  field1Name,
  field1Type,
  field2Name,
  field2Type,
  field3Name,
  field3Type,
  field4Name,
  field4Type,
  field5Name,
  field5Type,
  operation1_2,
  operation2_3,
  operation3_4,
  operation4_5,
  taxName,
  isActive,
  isNegative,
  isTaxUnderRevCharge,
  isTdsWthReq,
  rate,
  regNo,
  tdsWthTax
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl + "/tax",
      {
        businessModel: {
          baseCurrency: baseCurrency,
          entityAddress: entityAddress,
          entityEndFy: entityEndFy,
          entityHostName: entityHostName,
          entityHostPort: entityHostPort,
          entityId: entityId,
          entityLegalName: entityLegalName,
          entityShortName: entityShortName,
          entityStartFy: entityStartFy,
          entityType: entityType,
          homeCountry: homeCountry,
          incomeTaxIdentificationNumber: incomeTaxIdentificationNumber,
          pinCode: pinCode,
          rating: rating,
          ratingAgency: ratingAgency,
          stateCode: stateCode,
          status: calculationStatus,
          tdsWhtRateApplicable: tdsWhtRateApplicable,
        },
        calculationModel: {
          businessModel: {
            baseCurrency: baseCurrency,
            entityAddress: entityAddress,
            entityEndFy: entityEndFy,
            entityHostName: entityHostName,
            entityHostPort: entityHostPort,
            entityId: entityId,
            entityLegalName: entityLegalName,
            entityShortName: entityShortName,
            entityStartFy: entityStartFy,
            entityType: entityType,
            homeCountry: homeCountry,
            incomeTaxIdentificationNumber: incomeTaxIdentificationNumber,
            pinCode: pinCode,
            rating: rating,
            ratingAgency: ratingAgency,
            stateCode: stateCode,
            status: calculationStatus,
            tdsWhtRateApplicable: tdsWhtRateApplicable,
          },
          calculationCode: calculationCode,
          field1Name: field1Name,
          field1Type: field1Type,
          field2Name: field2Name,
          field2Type: field2Type,
          field3Name: field3Type,
          field3Type: field3Name,
          field4Name: field4Name,
          field4Type: field4Type,
          field5Name: field5Name,
          field5Type: field5Type,
          operation1_2: operation1_2,
          operation2_3: operation2_3,
          operation3_4: operation3_4,
          operation4_5: operation4_5,
          taxName: taxName,
        },
        isActive: isActive,
        isNegative: isNegative,
        isTaxUnderRevCharge: isTaxUnderRevCharge,
        isTdsWthReq: isTdsWthReq,
        rate: rate,
        regNo: regNo,
        taxName: taxName,
        tdsWthTax: tdsWthTax,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );

    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getTax = async (taxId) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(baseUrl + `/tax/entityId/${taxId}`, {
      headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

// business apis
export const getBusiness = async (key, value) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.get(
      baseUrl + `/business?key=${key}&value=${value}`,
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addBusiness = async (
  baseCurrency,
  entityAddress,
  entityEndFy,
  entityHostName,
  entityHostPort,
  entityId,
  entityLegalName,
  entityShortName,
  entityStartFy,
  entityType,
  homeCountry,
  incomeTaxIdentificationNumber,
  pinCode,
  rating,
  ratingAgency,
  stateCode,
  calculationStatus,
  tdsWhtRateApplicable
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.post(
      baseUrl,
      {
        baseCurrency: baseCurrency,
        entityAddress: entityAddress,
        entityEndFy: entityEndFy,
        entityHostName: entityHostName,
        entityHostPort: entityHostPort,
        entityId: entityId,
        entityLegalName: entityLegalName,
        entityShortName: entityShortName,
        entityStartFy: entityStartFy,
        entityType: entityType,
        homeCountry: homeCountry,
        incomeTaxIdentificationNumber: incomeTaxIdentificationNumber,
        pinCode: pinCode,
        rating: rating,
        ratingAgency: ratingAgency,
        stateCode: stateCode,
        status: calculationStatus,
        tdsWhtRateApplicable: tdsWhtRateApplicable,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );

    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateBusiness = async (
  businessId,
  baseCurrency,
  entityAddress,
  entityEndFy,
  entityHostName,
  entityHostPort,
  entityId,
  entityLegalName,
  entityShortName,
  entityStartFy,
  entityType,
  homeCountry,
  incomeTaxIdentificationNumber,
  pinCode,
  rating,
  ratingAgency,
  stateCode,
  calculationStatus,
  tdsWhtRateApplicable
) => {
  try {
    const jwtToken = await getJWTToken().then((res) => res.data.token);
    const res = await axios.put(
      baseUrl + `/business/${businessId}`,
      {
        baseCurrency: baseCurrency,
        entityAddress: entityAddress,
        entityEndFy: entityEndFy,
        entityHostName: entityHostName,
        entityHostPort: entityHostPort,
        entityId: entityId,
        entityLegalName: entityLegalName,
        entityShortName: entityShortName,
        entityStartFy: entityStartFy,
        entityType: entityType,
        homeCountry: homeCountry,
        incomeTaxIdentificationNumber: incomeTaxIdentificationNumber,
        pinCode: pinCode,
        rating: rating,
        ratingAgency: ratingAgency,
        stateCode: stateCode,
        status: calculationStatus,
        tdsWhtRateApplicable: tdsWhtRateApplicable,
      },
      {
        headers: { "X-AUTH-KEY": jwtToken, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.log(e);
  }
};
