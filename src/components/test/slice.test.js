import sliceReducer, { getPollutionData } from '../../redux/slice';

const initialState = [];
describe('Tests for Redux in project', () => {
  it('Test if the state is initially an empty array', () => {
    expect(sliceReducer(initialState, [])).toEqual([]);
  });

  it('Test if it returns a 10 items array', () => {
    expect(
      sliceReducer(
        initialState,
        getPollutionData([
          'Albania',
          'Andorra',
          'Austria',
          'Belarus',
          'Belgium',
          'Grey Crowned Crane',
          'Alpaca',
          'Bosnia and Herzegovina',
          'Bulgaria',
          'Croatia',
        ]),
      ),
    ).not.toEqual([
      'Albania',
      'Andorra',
      'Austria',
      'Belarus',
      'Belgium',
      'Grey Crowned Crane',
      'Alpaca',
      'Bosnia and Herzegovina',
      'Bulgaria',
      'Croatia',
    ]);
  });
  it('Test if it returns a same item in the array', () => {
    expect(
      sliceReducer(initialState, getPollutionData(['Czech Republic'])),
    ).not.toEqual(['Czech Republic']);
  });
});
