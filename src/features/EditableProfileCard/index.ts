import { fetchProfileData } from './models/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './models/slices/profileSlice';
import { Profile } from './models/types/Profile';
import { ProfileSchema } from './models/types/ProfileSchema';
import { getProfileData } from './models/selectors/getProfileData/getProfileData';
import { updateProfileData } from './models/services/updateProfileData/updateProfileData';

export {
  ProfileSchema,
  Profile,
  profileReducer,
  profileActions,
  fetchProfileData,
  getProfileData,
  updateProfileData,
};
