import VietmapGL from '../../../javascript';

describe('snapshotManager', () => {
  it('should resolve uri', async () => {
    const options = {centerCoordinate: [1, 2]};
    const uri = await VietmapGL.snapshotManager.takeSnap(options);
    expect(uri).toEqual('file://test.png');
  });
});
