package com.waste.human

import org.springframework.stereotype.Service

@Service
open class HumanService(var humanRepository: HumanRepository) {

    open fun create(humanRequest: HumanApiWrapper): HumanApiWrapper =
        humanRepository.save(HumanEntity(
            firstName = humanRequest.firstName,
            lastName = humanRequest.lastName,
            email = humanRequest.email))
            .let { savedEntity ->
                transform(savedEntity)
            }

    open fun getAll(): List<HumanApiWrapper> =
        humanRepository.findAll().map { humanEntity -> transform(humanEntity) }

    private fun transform(savedEntity: HumanEntity): HumanApiWrapper {
        return HumanApiWrapper(
            id = savedEntity.id,
            firstName = savedEntity.firstName,
            lastName = savedEntity.lastName,
            email = savedEntity.email)
    }
}