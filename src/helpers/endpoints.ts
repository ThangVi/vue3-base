export const END_POINTS = {
  USER_NAME: "Users/GetProfileCustom ",
  GET_PERMISSION_BY_ROLE: "/actions",

  SERVICES: "/api/v1/Provider/GetServices",
  PROVIDES: "/api/v1/Provider/GetProviders",
  PROVIDES_CREATE: "/api/v1/Provider/CreateProvider",
  PROVIDES_BY_ID: "/api/v1/Provider/GetProvider",
  GET_INVOICE_INFOMATION: "/api/v1/Payoo/GetInvoiceInformation",
  PAY_BILL_INVOICE: "/api/v1/Payoo/PayBillInvoice",
  UPDATE_MIFOS_CASH: "/api/v1/Mifos/MifosUpdateCash",
  CREATE_PARTNER_TRANS: "/api/v1/VasReport/CreatePartnerTransaction",
  LIST_TRANSACTION_TYPE: "/api/v1/Provider/GetTransactionType",
  LIST_SHOP: "/api/v1/MasterData/GetShopList",
  FILTER_TRANS_HISTORY: "/api/v1/VasReport/FilterPartnerTransactions",
  GET_PRINT_REPORT: "/api/v1/VasReport/GetVasReportToPrint",
  GET_CUSTOMER_NAME: "/api/v1/VasReport/GetCustomerName",
  GET_CARD_PROVIDER_LIST: "/api/v1/Payoo/GetCardProviderList",
  CODE_PAYMENT: "/api/v1/Payoo/CodePaymentBE",
  PAY_CODE_INQUIRY: "/api/v1/Payoo/PaycodeInquiryBE",
  TOPUP_PAYMENT: "/api/v1/Payoo/TopupPaymentBE",
  GET_TOPUP_VALUE_LIST: "/api/v1/Payoo/GetTopupValueList",
  GET_INVOICE_MOMO_INFOMATION: "/api/v1/Momo/GetInvoiceInformation",
  PROVIDER_SERVICES: "/api/v1/VasCommon/GetProviderByService",
  GET_DRIVER_INFO: "/api/v1/DriverTopup/GetInvoiceInformation",
  GET_ACCOUNT_TOPUP_INFO: "/api/v1/AccountTopup/GetInvoiceInformation",
  ACCOUNT_TOPUP_PAYMENT_BILL: "/api/v1/AccountTopup/PaymentBill",
  DRIVER_PAY_BILL: "/api/v1/DriverTopup/PaymentBill",
  GET_TOTAL_BONUS: "/api/v1/VasReport/GetTotalBonusOffice",
  GET_SHOP_BY_USER_CODE: "/api/v1/MasterData/GetShopByUserCode",
  GET_SERVICE_BY_TRANSACTION_TYPE:
    "/api/v1/Provider/GetServiceByTransactionTypeId",
  PAYMENT_BILL: "/api/v1/PayTheBill/PaymentBill",
  TOPUP_PAYMENT_BE: "/api/v1/TopupPaymentBE/TopupPaymentBE",
  CODE_PAYMENT_BE: "/api/v1/CodePaymentBE/CodePaymentBE",
  VERIFY_WITHDRAW_WALLET: "/api/v1/Withdrawal/VerifyWithdrawalWallet",
  CONFIRM_WITHDRAW_WALLET: "/api/v1/Withdrawal/ConfirmWithdrawalWallet",
  DEPOSIT_WALLET: "/api/v1/DepositWallet/DepositWallet",
  GET_POINT_FOR_USER: "/api/v1/RewardPoint/GetPointForUser",
  GET_TRANSACTION_MOMO: "/api/v1/VasReport/GetTransactionMomo",
  GET_USER_BY_ATTRIBUTE: "/api/v1/MasterData/GetUsersByAttribute",
  GET_QR_CODE: "/api/v1/QrCode/Generate/generate",
  VERIFY_OTP: "/api/v1/Otp/VerifyOtp",
  GET_USER_OTP_INFO: "/api/v1/UserOtp/GetUserOtpInfo",
  SEND_OTP_CCM: "/api/v1/Otp/sendOtpCCM",
  VERIFY_OTP_CCM: "/api/v1/Otp/verifyOtpCCM",
  GET_HOTLINE: "/api/v1/VasReport/GetHotLines",
  CHECK_TRANS_STATUS: "/api/v1/VasReport/CheckStatusTrans",
  DEPOSIT_CHECK_INFO: "/api/v1/DepositWallet/DepositCheckInfo",
  GET_INSURANCE_INFO: "/api/v1/Insurance/GetInformationCustomer",
  VALIDATE_INSURANCE_CONTRACT: "/api/v1/Insurance/ValidateCreateContract",
  CREATE_INSURANCE_CONTACT: "/api/v1/Insurance/CreateFinishContact",
  GET_PDF_TEMPLATE_INSURANCE: "/api/v1/Insurance/ExportContractPdfTemplate",
  MOMO_TOPUP_CHECK_INFO: "/api/v1/DepositWallet/MomoDepositWalletCheckInfo",
  RESEND_OTP: "/api/v1/Withdrawal/ResendOtpWallet",
  CHECK_BILL_LN_INFO: "/api/v1/PayTheBill/CheckIBilllnformation",
};
