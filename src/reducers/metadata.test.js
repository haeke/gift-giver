import metadataReducer from "./metadata";
import { FETCH_LOREM } from "../actions/constants";

describe("metadata reducer", () => {
  const loremData = {
    data:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc Hieronymus summum bonum esse dixit. An eiusdem modi? Haec quo modo conveniant, non sane intellego. Duo Reges: constructio interrete. Sed fortuna fortis; </p>",
    metadata: {
      pending: false,
      loaded: true,
      error: false
    }
  };

  it("fetches and sets the lorem data", () => {
    // test calling the FETCH_LOREM action on the metadataReducer
    expect(metadataReducer({}, { type: FETCH_LOREM, data: loremData })).toEqual(
      loremData
    );
  });
});
