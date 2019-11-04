export class Pokemon {
  name: string;
  imgUrl: string;
  description: string;

  constructor(input?: Pokemon) {
    if (input != null) {
      Object.assign(this, input);
    }
  }
}
