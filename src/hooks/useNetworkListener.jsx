import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';

import { setNetworkStatus } from '../store/slices/networkSlice';

export const useNetworkListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const isConnected =
        state.isConnected === true && state.isInternetReachable !== false;

      dispatch(setNetworkStatus(isConnected));

      console.log('Network status:', isConnected ? 'ONLINE' : 'OFFLINE');
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};
