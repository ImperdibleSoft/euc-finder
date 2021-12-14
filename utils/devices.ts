const getUserAgent = () => {
  const { userAgent = '' } = global.navigator ?? {};
  return userAgent.toLowerCase();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isIPad = () => {
  const ua = getUserAgent();
  const { maxTouchPoints = 0 } = global.navigator ?? {};

  // ipad with iPadOS 13 and above don't identify as ipad in the user-agent anymore
  return (
    ua.includes('ipad') || (ua.includes('macintosh') && maxTouchPoints >= 1)
  );
};

export const isMobile = () => {
  const ua = getUserAgent();
  return ua.includes('mobile') || ua.includes('iphone');
};

export const isTablet = () => {
  const ua = getUserAgent();
  return (ua.includes('android') && !isMobile()) || isIPad();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isDesktop = () => !isMobile() && !isTablet();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isIOS = () => {
  const ua = getUserAgent();
  return ua.includes('iphone') || isIPad();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isAndroid = () => {
  const ua = getUserAgent();
  return ua.includes('android');
};

export const hasCamera = async () => {
  try {
    const devices = await global.navigator.mediaDevices?.enumerateDevices?.();
    return devices?.some?.(device => device.kind === 'videoinput') || isIPad();
  } catch (e) {
    console.error('Failed to detect mediaDevices', e);
    return isIPad(); // assume all iOS devices have a camera
  }
};