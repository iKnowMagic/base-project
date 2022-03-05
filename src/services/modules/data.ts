import { dataService } from '@/services/http'

import { AxiosResponse } from 'axios'

import { SimpleObject } from '@/types'
import { ApiCollectionResponse, ApiResponse } from '@/types/api'
import {
  BaseCampaignContent,
  Campaign,
  CampaignBase,
  CampaignComment,
  CampaignConfigurationProfile
} from '@/types/campaign'

export default {
  getCampaign(
    campaignId: string
  ): Promise<AxiosResponse<ApiResponse<Campaign>>> {
    return dataService.get(`/campaigns/${campaignId}`)
  },
  getCampaigns(
    params: SimpleObject
  ): Promise<AxiosResponse<ApiResponse<ApiCollectionResponse<CampaignBase>>>> {
    return dataService.post(`/campaigns`, params)
  },
  saveCampaignOverview(params: SimpleObject): SimpleObject {
    return dataService.put(`/campaigns/overview`, params)
  },
  getDevices(campaignId: string): Promise<
    AxiosResponse<
      ApiResponse<{
        data: (string | number)[]
        deviceSelection: null | {
          selectedDeviceBy: string
          deviceGroupId: number
        }
        totalCount: number
      }>
    >
  > {
    return dataService.get(`/campaigns/${campaignId}/devices`)
  },
  saveDevices(campaignId: string, params: SimpleObject): SimpleObject {
    return dataService.put(`/campaigns/${campaignId}/devices`, params)
  },
  getCurrentCampaignAdvertisementSpots(
    campaignId: string
  ): Promise<AxiosResponse<ApiResponse<CampaignConfigurationProfile[]>>> {
    return dataService.get(`/campaigns/${campaignId}/advertisement-spots`)
  },
  getCurrentCampaignContents(campaignId: string): SimpleObject {
    return dataService.get(`/campaigns/${campaignId}/contents`)
  },
  getCampaignComments(
    campaignId: string
  ): Promise<
    AxiosResponse<ApiResponse<ApiCollectionResponse<CampaignComment>>>
  > {
    return dataService.get(`/campaigns/${campaignId}/comments`)
  },
  saveCurrentCampaignContents(
    campaignId: string,
    params: SimpleObject
  ): SimpleObject {
    return dataService.put(`/campaigns/${campaignId}/contents`, params)
  },
  getConfigProfile(configProfileId: string): SimpleObject {
    return dataService.get(`/configuration-profiles/${configProfileId}`)
  },
  getConfigProfileAdSpot(
    configProfileId: string,
    addSpotId: string
  ): SimpleObject {
    return dataService.get(
      `/configuration-profiles/${configProfileId}/advertisement-spots/${addSpotId}`
    )
  },
  getCampaignIdContent(
    campaignId: string
  ): Promise<AxiosResponse<ApiResponse<BaseCampaignContent[]>>> {
    return dataService.get(`/campaigns/${campaignId}/contents`)
  },

  getCampaignDevices(
    campaignId: string,
    page: number,
    size: number
  ): SimpleObject {
    let url = `/campaigns/${campaignId}/devices`
    if (page && size) {
      url = `${url}?page=${page}&size=${size}`
    } else {
      if (page) {
        url = `${url}?page=${page}`
      }

      if (size) {
        url = `${url}?size=${size}`
      }
    }

    return dataService.get(url)
  },
  getCampaignSchedule(campaignId: string): SimpleObject {
    return dataService.get(`/campaigns/${campaignId}/schedule`)
  },

  approveCampaign(
    campaignId: string
  ): Promise<AxiosResponse<ApiResponse<Campaign>>> {
    return dataService.post(`/campaigns/${campaignId}/approve`)
  },

  saveCampaignSchedule(
    campaignId: string,
    params: SimpleObject
  ): SimpleObject {
    return dataService.put(`/campaigns/${campaignId}/schedule`, params)
  },
  reviewCampaign(campaignId: string): SimpleObject {
    return dataService.post(`/campaigns/${campaignId}/for-review`)
  },
  publishCampaign(campaignId: string): SimpleObject {
    return dataService.post(`/campaigns/${campaignId}/publish`)
  },
  rejectCampaign(
    campaignId: string,
    params: {
      comment: string
    }
  ): Promise<AxiosResponse<ApiResponse<Campaign>>> {
    return dataService.post(`/campaigns/${campaignId}/reject`, params)
  },
  getNotifications(): Promise<
    AxiosResponse<
      ApiResponse<{
        campaignIdsForReview: string[]
        campaignIdsRejected: string[]
      }>
    >
  > {
    return dataService.get(`/notifications/`)
  }
}
