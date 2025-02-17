import { Factory } from "miragejs";

export default Factory.extend({
  id: (i: number) => `doc-${i}`,
  objectID: (i: number) => `doc-${i}`,
  status: "Draft",
  product: "Vault",
  docType: "RFC",
  modifiedAgo: 1000000000,
  modifiedTime: 1000000000,
  docNumber: "RFC-0000",
  title: "My Document",
});
