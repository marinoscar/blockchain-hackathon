import * as x509 from 'x509';
import * as fs from 'fs';

export namespace Users {

  export type User = {
    org: string,
    user: string,
    id: string,
    ref: string,
    name: string
  };

  export function GetUsers(list: { org: string, user: string, name: string }[]): User[] {
    return list.map((item) => {
      const certPath = `../../.convector-dev-env/.hfc-${item.org}/${item.user}`;
      const cert = JSON.parse(fs.readFileSync(certPath, 'utf8')).enrollment;
      const certParsed = x509.parseCert(cert.identity.certificate);
      return {
        org: item.org,
        user: item.user,
        id: certParsed.fingerPrint,
        ref: `${item.org}:${item.user}`,
        name: item.name,
      };
    });
  }
}
