import { getCategory, getSearchExperiences } from "./experiences"
import { getSearchLocation } from "./location"
import { getSearchTours } from "./reviews"
import { getCategoryTours, getDetailSummaryTours, getDetailTours } from "./tours"


class HttpDataClient {

    async SearchLocation(params: { page: number, s: string,  }) {
        return await getSearchLocation(params).then((response) => {
            const res = response?.data
            return res
        }).catch((error: any) => {
            return error.response.data
        })
    }

    // experience

    async SearchExperience(params: { page: number, s: string,  }) {
        return await getSearchExperiences(params).then((response) => {
            const res = response.data
            return res
        }).catch((error: any) => {
            return error.response.data
        })
    }
    async SearchCategorys() {
        return await getCategory().then((response) => {
            const res = response.data
            return res
        }).catch((error: any) => {
            return error.response.data
        })
    }

    // reviwes
    async SearchReviews(params: { page: number, s: string,  }) {
        return await getSearchExperiences(params).then((response) => {
            const res = response.data
            return res
        }).catch((error: any) => {
            return error.response.data
        })
    }

    // tours
    async SearchTours(params: { page: number, s: string,service_name: string  }) {
        return await getSearchTours(params).then((response) => {
            const res = response.data
            return res
        }).catch((error: any) => {
            return error.response.data
        })
    }
    async SearchDetailTours(params: { id: any, lang: string,  }) {
        return await getDetailTours(params).then((response) => {
            const res = response.data
            return res
        }).catch((error: any) => {
            return error.response.data
        })
    }
    async SearchDetailSummaryTours(params: { id: any, lang: string,  }) {
        return await getDetailSummaryTours(params).then((response) => {
            const res = response.data
            return res
        }).catch((error: any) => {
            return error.response.data
        })
    }
    async SearchToursCategorys() {
        return await getCategoryTours().then((response) => {
            const res = response.data
            return res
        }).catch((error: any) => {
            return error.response.data
        })
    }

}

const HttpDataClients = new HttpDataClient()

export default HttpDataClients

