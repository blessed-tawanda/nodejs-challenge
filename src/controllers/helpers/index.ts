import User from "../../models/User";

export function mapConsentToID(users: User[]): Array<any> {
  return users.map((user: any) => {
    const temp = user.toJSON();
    const consents = temp.consents;
    delete temp.consent;
    temp.consents = consents.map((consent: any) => {
      return {
        id: consent.consent,
        enabled: consent.enabled
      }
    });
    // console.log(.consents);
    
    return temp;
  })
}